const Section = ({title, children}) => {
    return(
        <section>
            {title && <h1>Title</h1>}
            {children}
        </section>
    )
};
