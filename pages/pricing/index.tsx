import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function ContactPage() {
    return (
        <MainLayout>
            <>
                <h1>Pricing Page</h1>
            </>
            <div className={'description'}>
                <h1 className={'title'}>
                    Go to <Link href="/">Home</Link>
                </h1>
                <p>
                    Get started by editing&nbsp;
                    <code className={'code'}>pages/pricing/index.tsx</code>
                </p>
            </div>
        </MainLayout>
    );
};
