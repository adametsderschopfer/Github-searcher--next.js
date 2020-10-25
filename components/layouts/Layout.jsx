import Head from "next/head";
import { useSelector } from "react-redux";
import SearchBarContainer from "../../containers/SearchBarContainer";
import PageTitle from "../PageTitle";

export default function Layout({ children, styleBar = {} }) {

  return (
    <>
      <Head></Head>


      <header className="header">
        <PageTitle />
        <SearchBarContainer style={styleBar} />
      </header>

      <main>{children}</main>
    </>
  );
}
