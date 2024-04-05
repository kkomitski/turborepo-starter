import type { NextPage } from "next";
import Head from "next/head";
import { Button, DropdownMenu } from "ui";

const Web: NextPage = () => {
  return (
    <>
      <Head>
        <title>Turborepo Starter: Web</title>
        <meta name="description" content="Turborepo Starter: Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="pb-2">Turborepo Starter: Web</h1>
        <Button variant="orange" arrow={true}>
          hi
        </Button>
        <DropdownMenu
          initial="two"
          callback={() => {}}
          options={["Option1", "Option2", "Option3", "Option4"]}
        />
      </main>
    </>
  );
};

export default Web;
