import React from "react";
import Styles from "./Styles";
import {
    Table,
    TableBody,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Button,
    useMediaQuery,
} from "@mui/material";
import Pagination from "./TablePagination";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Fonts } from "config";
import TextComponent from "components/others/TextComponent";

function descendingComparator(a: Array<any>, b: Array<any>, orderBy: any) {
    if (a[orderBy] < b[orderBy]) return -1;
    if (a[orderBy] > b[orderBy]) return 1;
    return 0;
}

function getComparator(order: any, orderBy: any) {
    return order === "desc"
        ? (a: any, b: any) => descendingComparator(b, a, orderBy)
        : (a: any, b: any) => descendingComparator(a, b, orderBy);
}

function stableSort(array: Array<any>, comparator: any) {
    const stabilized = array.map((element, index) => [element, index]);
    stabilized.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilized.map((element) => element[0]);
}

function TableHeadSort({
    tableLabels,
    order,
    orderBy,
    onRequestSort,
}: {
    tableLabels: any;
    order: any;
    orderBy: any;
    onRequestSort: any;
}) {
    const createSortHandler = (property: any) => () => {
        onRequestSort(null, property);
    };

    return (
        <TableRow>
            {tableLabels.map((label: any, index: any) => (
                <Styles.StyledTableCell
                    key={label}
                    sortDirection={
                        index === 0 && orderBy === label.toLowerCase() ? order : false
                    }
                    align={index === tableLabels.length - 1 ? "right" : "left"}
                >
                    {index === 0 ? (
                        <Styles.StyledTableSortButton
                            IconComponent={KeyboardArrowDownIcon}
                            active={orderBy === label.toLowerCase()}
                            direction={orderBy === label.toLowerCase() ? order : "asc"}
                            onClick={createSortHandler(label.toLowerCase())}
                        >
                            {label}
                        </Styles.StyledTableSortButton>
                    ) : (
                        label
                    )}
                </Styles.StyledTableCell>
            ))}
        </TableRow>
    );
}

function TableComponent({
    tableHeadTitles,
    tableData,
    actions,
}: {
    tableHeadTitles: any;
    tableData: any;
    actions?: any;
}) {
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("id");
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (_event: any, property: any) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    React.useEffect(() => {
        console.log("rowsPerPage mudou:", rowsPerPage);
        setPage(0);
    }, [rowsPerPage]);

    const sortedRows = stableSort(tableData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    return (
        <TableContainer component={Styles.Container}>
            {isMobile ? (
                <Styles.MobileContainer>
                    {sortedRows.map((row) => (
                        <Styles.Card key={row.id}>
                            <TextComponent customTypeFont={Fonts.bold} fontSize="1rem">
                                Id: {row.id}
                            </TextComponent>
                            <TextComponent customTypeFont={Fonts.bold} fontSize="1rem">
                                Nome: {row.name}
                            </TextComponent>
                            <TextComponent customTypeFont={Fonts.bold} fontSize="1rem">
                                Raça: {row.characterRace}
                            </TextComponent>
                            <TextComponent customTypeFont={Fonts.bold} fontSize="1rem">
                                Classe: {row.characterClass}
                            </TextComponent>

                            <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                                {actions?.map((action: any, index: number) => (
                                    <Styles.TableButtonActions
                                        key={index}
                                        $customColor={action.color}
                                        onClick={() => action.onClick(row)}
                                    >
                                        {action.label}
                                    </Styles.TableButtonActions>
                                ))}
                            </div>
                        </Styles.Card>
                    ))}
                </Styles.MobileContainer>
            ) : (
                <Table>
                    <TableHead>
                        <TableHeadSort
                            tableLabels={tableHeadTitles}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                    </TableHead>
                    <TableBody>
                        {sortedRows.map((row) => (
                            <Styles.StyledTableRow key={row.id}>
                                <Styles.StyledTableCell>{row.id}</Styles.StyledTableCell>
                                <Styles.StyledTableCell>{row.name}</Styles.StyledTableCell>
                                <Styles.StyledTableCell>
                                    {row.characterRace}
                                </Styles.StyledTableCell>
                                <Styles.StyledTableCell>
                                    {row.characterClass}
                                </Styles.StyledTableCell>

                                <Styles.StyledTableCell align="right" sx={{ width: "30%" }}>
                                    {actions?.map((action: any, index: number) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "inline-block",
                                                marginLeft: index > 0 ? "10px" : "0",
                                            }}
                                        >
                                            <Styles.TableButtonActions
                                                key={index}
                                                variant="contained"
                                                $customColor={action.color}
                                                onClick={() => action.onClick(row)}
                                            >
                                                {action.label}
                                            </Styles.TableButtonActions>
                                        </div>
                                    ))}
                                </Styles.StyledTableCell>
                            </Styles.StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
            <TableFooter>
                <Pagination
                    rowsPerPage={rowsPerPage}
                    rows={tableData}
                    setRowsPerPage={setRowsPerPage}
                    page={page}
                    setPage={setPage}
                />
            </TableFooter>
        </TableContainer>
    );
}

export default TableComponent;

//REFATORAR DEPOIS
