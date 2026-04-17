import styled from "styled-components";
import { FontFamily } from "config";
import {
    Button,
    IconButton,
    Paper,
    TableCell,
    tableCellClasses,
    TablePagination,
    TableRow,
    TableSortLabel,
} from "@mui/material";

const Container = styled(Paper)(() => {
    return {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
});

const StyledTableCell = styled(TableCell)(({ theme }) => {
    const { spacing, palette: colors } = theme;
    return {
        [`&.${tableCellClasses.head}`]: {
            ...FontFamily.bold14,
            backgroundColor: colors.secondary.contrastText,
            color: colors.primary.contrastText,
            padding: spacing(2, 2),
            border: "none",
        },
        [`&.${tableCellClasses.body}`]: {
            ...FontFamily.medium14,
            backgroundColor: colors.primary.main,
            borderBottom: `solid 5px ${colors.text.disabled}`,
        },
    };
});

const StyledTableRow = styled(TableRow)(() => {
    return {
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    };
});

const StyledTableSortButton = styled(TableSortLabel)(({ theme }) => {
    const { palette: colors } = theme;
    return {
        "&&.MuiTableSortLabel-root": {
            backgroundColor: colors.secondary.contrastText,
            color: colors.primary.contrastText,
            "& .MuiTableSortLabel-icon": {
                color: colors.primary.contrastText,
            },
        },
    };
});

const TableButtonActions = styled(Button)<{ $customColor?: string }>(({
    theme,
    $customColor,
}) => {
    const { palette: colors } = theme;
    return {
        "&&.MuiButtonBase-root": {
            ...FontFamily.bold14,
            backgroundColor: $customColor,
            color: colors.primary.contrastText,
            borderRadius: "6px",
            "&:hover": {
                backgroundColor: $customColor + "2F",
            },
        },
    };
});

const StyledTablePagination = styled(TablePagination)(({ theme }) => {
    const { palette: colors } = theme;
    return {
        "&&.MuiTablePagination-root": {
            border: 0,
            "& .MuiTablePagination-toolbar": {
                "& .MuiTablePagination-displayedRows": {
                    ...FontFamily.bold14,
                },
            },
        },

        "& .MuiTablePagination-selectLabel": {
            ...FontFamily.bold14,
            color: colors.primary.contrastText,
        },
        "& .MuiSelect-select": {
            backgroundColor: colors.secondary.contrastText,
            color: colors.primary.contrastText,
            padding: theme.spacing(1),
            borderRadius: "5px",
        },
    };
});

const PaginationButton = styled(IconButton)(({ theme }) => {
    const { palette: colors } = theme;
    return {
        "&&.MuiIconButton-root": {
            color: colors.primary.contrastText,
            "&:hover": {
                backgroundColor: colors.secondary.contrastText,
            },
            marginRight: theme.spacing(1),
        },
    };
});

const MobileContainer = styled.div(({ theme }) => {
    const { spacing } = theme;
    return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: spacing(2),
    };
});

const Card = styled.div(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        background: colors.primary.main,
        padding: spacing(2),
        marginBottom: spacing(1),
        borderRadius: spacing(1),
    };
});

const Styles = {
    Container,
    StyledTableCell,
    StyledTableRow,
    StyledTableSortButton,
    TableButtonActions,
    StyledTablePagination,
    PaginationButton,

    MobileContainer,
    Card,
};

export default Styles;
