export default function PageTitle({style}) {
  return (
    <div className="Page_title" style={style}>
      Git<span>Hub</span> user searher
      <style jsx>{`
        .Page_title {
          font-weight: 400;
          font-size: 48px;

          text-align: center;

          color: #ffffff;

          text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.45);
        }

        .Page_title span {
          font-weight: 700;
          color: #b56114;
        }
      `}</style>
    </div>
  );
}
