const CarItem = ({ params }: { params: { id: string }} ) => {
  console.log(params);
  return <div>Car for {params.id}</div>;
};

export default CarItem;
