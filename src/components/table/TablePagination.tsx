import { Box } from "@mui/material";
import { colors, FontFamily } from "../../config";
import Styles from "./Styles";
import {
    FirstPage,
    KeyboardArrowLeft,
    KeyboardArrowRight,
    LastPage,
} from "@mui/icons-material";

type Props = {
    count: any;
    page: any;
    rowsPerPage: any;
    setPage: any;
};

function TablePaginationButtons({ count, page, rowsPerPage, setPage }: Props) {
    const onPageChange = (_event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleFirstPageButtonClick = (event: any) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: any) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: any) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: any) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginLeft: "20px",
                py: 2,
            }}
        >
            <Styles.PaginationButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
                size="medium"
            >
                <FirstPage />
            </Styles.PaginationButton>
            <Styles.PaginationButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
                size="medium"
            >
                <KeyboardArrowLeft />
            </Styles.PaginationButton>
            <Styles.PaginationButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
                size="medium"
            >
                <KeyboardArrowRight />
            </Styles.PaginationButton>
            <Styles.PaginationButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                <LastPage />
            </Styles.PaginationButton>
        </Box>
    );
}

function Pagination({
    page,
    setPage,
    rowsPerPage,
    rows,
    setRowsPerPage,
}: {
    page: any;
    setPage: any;
    rowsPerPage: any;
    rows: any;
    setRowsPerPage: any;
}) {
    const handleChangePage = (_event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Styles.StyledTablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: 12 }]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={(props) => (
                <TablePaginationButtons {...props} setPage={setPage} />
            )}
            slotProps={{
                select: {
                    MenuProps: {
                        PaperProps: {
                            sx: {
                                backgroundColor: colors.purple,
                                "& .MuiMenuItem-root": {
                                    ...FontFamily.medium14,
                                    color: colors.white,
                                    "&:hover": {
                                        color: colors.white,
                                        backgroundColor: colors.black,
                                    },
                                    "&.Mui-selected": {
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    },
                                },
                            },
                        },
                    },
                    sx: {
                        margin: "15px",
                        backgroundColor: colors.purple,
                        color: colors.white,
                        borderRadius: "5px",
                    },
                },
            }}
        />
    );
}

export default Pagination;

//REFATORAR DEPOIS