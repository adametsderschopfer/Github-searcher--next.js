import { useSelector } from "react-redux";
import Layout from "../components/layouts/Layout";
import SearchResults from "../components/SearchResults/SearchResults"

function Home() {
  const { users } = useSelector((state) => state.users);

  if (!users.length) {
    return <Layout />;
  }

  if (users.length) {
    return (
      <>        
        <Layout styleBar={{ marginTop: "30px" }}>
          <SearchResults users={users} />
        </Layout>

        <style jsx global>
          {`
            .header {
              height: 22%;
            }

            @media (max-width: 400px) {
              .header {
                height: 33% !important;
              }
            }

            
          `}
        </style>
      </>
    );
  }

  return;
}

export default Home;
