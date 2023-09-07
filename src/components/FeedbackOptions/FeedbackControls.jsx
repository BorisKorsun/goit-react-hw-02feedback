import capitalizeFLetter from "utils/CapitalizeFirstLetter";

const FeedbackControls = ({ config }) => {
  return (
    <>
      {config.map(button => {
        return <button key={button} type="button">{capitalizeFLetter(button)}</button>;
      })}
    </>
  );
};

export default FeedbackControls;
