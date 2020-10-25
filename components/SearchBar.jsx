import Loader from "./Loader";

export default function SearchBar({
  style,
  loading,
  handlers: { enterHandler, inputHandler },
  value,
}) {
  return (
    <div className="SearchBar" style={style}>
      <div className="SearchBar_wrapper">
       <form onSubmit={enterHandler}>
       <input
          type="text"
          placeholder="Enter username"
          className="SearchBar_input"
          maxLength="60"
          onChange={inputHandler}
          value={value}
        />
       </form>
        {loading && <Loader />}
      </div>

      <style jsx>
        {`
          .SearchBar {
            margin-top: 105px;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: all 0.5s;
          }

          .SearchBar .SearchBar_wrapper {
            background: #414a4c;

            max-width: 900px;
            width: 100%;
            height: 50px;

            border-radius: 54px;

            box-shadow: 0px 7px 41px 9px rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: center;
          }

          .SearchBar .SearchBar_wrapper form {
            width: 100%;
            height: 100%
          }

          .SearchBar .SearchBar_input {
            font-size: 18px;
            font-weight: 400;

            color: #fff;
            padding: 0 50px;

            height: 100%;
            width: 100%;
          }

          .SearchBar .SearchBar_input::placeholder {
            color: rgba(255, 255, 255, 0.25);
          }

          @media (max-width: 650px) {
            .SearchBar .SearchBar_input {
              padding: 0 15px;
            }
          }
        `}
      </style>
    </div>
  );
}
