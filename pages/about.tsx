import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

export default function aboutPage() {
    return (
        <DarkLayout>
            <>
                <h1>About Page</h1>
            </>
            <div className={"description"}>
                <h2 className={"title"}>
                Go to<Link href="/">Home</Link>
                </h2>
                <p>
                Get started by editing&nbsp;
                <code className={"code"}>pages/about.tsx</code>
                </p>
            </div>
        </DarkLayout>
    );
};

aboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
