import useAnime from "../hooks/useAnime";
type Props = {
  params: {
    id: string;
  };
};

function SpecificAnime({ params }: Props) {
  console.log(params.id, typeof params.id);
  return (
    <>
      <h1>{"hola"}</h1>
    </>
  );
}

export default SpecificAnime;
