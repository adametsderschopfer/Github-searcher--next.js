import Loader from "../../components/Loader";
import PageTitle from "../../components/PageTitle";
import { http_request } from "../../utils/http-request";
import Link from "next/link"

function CurrentUser({ user, repos }) {

  if (!user) {
    return (
      <div className="userLoaderCenter">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="currentUser">
        <PageTitle style={{ marginTop: "35px", marginBottom: "35px" }} />
          <Link href="/"><a>Назад</a></Link>
        <hr className="horizontalLine" />

        <div className="row">
          <div className="sidebar">
            <div className="avatar">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="texts">
              <div className="username">{user.name}</div>
              <div className="login">{user.login}</div>

              <p className="bio">{user.bio}</p>

              <a className="openRepo" target="_blank" href={user.html_url}>
                Open profile on git<span>hub</span>
              </a>
            </div>
          </div>

          <div className="repositories">
            <div className="title">
              Repositories | <span>{user.public_repos} rep.</span>
            </div>

            <div className="repos">
              {repos &&
                repos.map((i, idx) => {
                  return (
                    <div className="repo" key={idx}>
                      <div className="reponame">{i.name}</div>
                      <div className="gotorepo">
                        <a target="_blank" href={i.html_url}>
                          Open repository on github
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .currentUser {
          height: calc(100% - 125px);
        }
        .currentUser .row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;

          height: 100%;
        }

        .currentUser .sidebar {
          border-right: 2px solid #3b444b;

          padding-top: 30px;
          padding-right: 30px;
          padding-left: 15px;

          min-width: 310px;

          display: flex;
          flex-direction: column;
          padding-bottom: 30px;

          border-bottom: 2px solid #3b444b;
          border-left: 2px solid #3b444b;
        }

        .currentUser .horizontalLine {
          margin-bottom: 0;
        }

        .currentUser .sidebar .avatar {
          max-width: 350px;
          max-height: 350px;
          width: 100%;
        }

        .currentUser .sidebar .avatar img {
          width: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .username {
          font-weight: 800;
          font-size: 38px;

          margin-top: 15px;
          word-break: break-word;
        }

        .login {
          font-weight: 300;
          font-size: 14px;

          color: rgba(202, 202, 202, 0.96);
        }

        .bio {
          word-break: break-all;
          line-height: 23px;

          font-weight: 300;
        }

        .openRepo {
          font-weight: 300;
          border-radius: 5px;
          border: 1px solid #fff;

          width: 100%;
          display: flex;
          justify-content: center;
          padding: 10px 3px;
          transition: all 0.3s;
          cursor: pointer;

          margin-top: 50px;
          text-align: center;
          color: #fff;
        }

        .openRepo:hover {
          background: #fff;
          color: #232b2b;
        }

        .openRepo span {
          font-weight: 700;
          color: #b56114;
        }

        .repositories .repos {
          display: flex;
          flex-wrap: wrap;
        }

        .repositories {
          display: flex;
          flex-direction: column;
          max-width: 100%;
        }

        .repositories .title {
          font-weight: 300;
          font-size: 24px;

          color: #ffffff;

          margin-top: 30px;
          margin-left: 30px;
        }

        .repositories .title span {
          font-weight: 300;
          font-size: 24px;

          color: rgba(255, 255, 255, 0.53);
        }

        .repositories .repos {
          margin-top: 30px;
          margin-left: 30px;

          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }

        .repositories .repos .repo {
          border-radius: 5px;
          border: 1px solid #fff;
          width: 100%;
          height: 100px;
          max-width: 500px;

          margin-bottom: 30px;

          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .reponame {
          font-weight: 800;
          font-size: 24px;

          color: #EB5757;
        }

        .gotorepo {
          display: flex;
          justify-content: flex-end;
        }

        .gotorepo a {
          max-width: 226px;
          max-height: 29px;

          background: #007bff;
          border-radius: 39px;
          padding: 5px 5px;
          font-size: 14px;

          color: #232b2b;
          transition: all 0.2s;

          filter: drop-shadow(0px 0px 20px rgba(0, 123, 255, 0.25));
        }

        .gotorepo a:hover {
          background: #fff;

          filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.25));
        }

        @media (max-width: 750px) {
          .currentUser .row {
            flex-wrap: wrap;
          }

          .currentUser .sidebar {
            border: none;
            flex-direction: row;

            flex-wrap: wrap;

            max-width: 100%;
          }

          .repos {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { userid: "" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params: { userid } }) {
  try {
    let user = await http_request(`users/${userid}?`);
    let repos = await http_request(`users/${userid}/repos?`);

    return { props: { user, repos } };
  } catch (error) {
    console.log(error);
  }
}

export default CurrentUser;
