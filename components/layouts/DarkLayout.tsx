import { ReactNode } from 'react';

interface DarkLayoutProps {
    children: ReactNode;
}

export const DarkLayout = ({children}: DarkLayoutProps) => {
    return (
        <div style={{
            backgroundColor:'rgba(106,90,205)',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>Dark-Layout</h3>
            <div>
                {children} 
            </div>
        </div>
    );
};
