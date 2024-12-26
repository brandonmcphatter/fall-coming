import Link from "next/link";

export default function Custom404() {
    return (
        <div style={styles.container} className={'h-screen'}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.description}>
                Oops! The page you&#39;re looking for doesn&#39;t exist.
            </p>
            <Link href="/" passHref>
                <p style={styles.link}>Go back to Home</p>
            </Link>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20vh',
        padding: '20px',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
    },
    description: {
        margin: '20px 0',
        fontSize: '1.5rem',
    },
    link: {
        textDecoration: 'none',
        color: '#0070f3',
        fontSize: '1.25rem',
    },
};