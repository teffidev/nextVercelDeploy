import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
    children: ReactNode;
}


export const MainLayout = ({children} : MainLayoutProps) => { 
    return (
        <>
            <Head>
                <title>Page-teffidev</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>
        </>
    );  
}
