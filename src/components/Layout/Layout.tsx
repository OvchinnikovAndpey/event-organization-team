import { HTMLAttributes, ReactNode } from 'react';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	wrapInMain?: boolean;
}



const Layout: React.FC<LayoutProps> = ({ children, wrapInMain = true }) => {
	return (
		<div className={styles.container}>
			<Header />
			{wrapInMain ? <main>{children}</main> : children}
			<Footer />
		</div>
	);
};

export default Layout;