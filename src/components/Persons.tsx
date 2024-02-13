export const Manjish = () => {
  return (
    <>
      <div style={{ background: "green", color: "white" }}>I am Manjish.</div>
    </>
  );
};

export const NotManjish = (props: { name: string }) => {
  return (
    <>
      <div style={{ background: "red", color: "white" }}>
        I am not Manjish.I am {props.name}
      </div>
    </>
  );
};
