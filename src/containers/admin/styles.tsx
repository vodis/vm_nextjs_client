import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        height: "100vh"
    },
    navbarVertical: {
        width: "100%",
        maxWidth: 250,
        borderStyle: "solid",
        borderWidth: "0px 1px 0px 0px",
        borderColor: "#e3ebf6"
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 1.25 + "rem",
        paddingBottom: 1.25 + "rem",
    },
    main: {
        width: 'calc(100% - 250px)',
        backgroundColor: '#f9fbfd',
    },
}))

export default useStyles