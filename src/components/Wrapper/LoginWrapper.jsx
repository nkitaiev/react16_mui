export const LoginWrapper = ({children, imageSide, formSide}) => {
    return <ThemeProvider theme={theme}><div className="page-layout">
        {children}
    </div></ThemeProvider>
}