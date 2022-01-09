const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  // pokud bychom definovali tu fci onChange nebo onDragStart INLINE (tedy primo dole v returnu) => tak bychom nemuseli 
  // pridavat type of Event, typescript by si to automaticky priradil
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
