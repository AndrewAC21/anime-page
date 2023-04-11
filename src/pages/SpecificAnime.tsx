type Props = {
  params: {
    id: string;
  };
};

function SpecificAnime({ params }: Props) {
  return <div>{params.id}</div>;
}

export default SpecificAnime;
