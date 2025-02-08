export function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <div 
        className="absolute inset-0 bg-[url('../images/ground.svg')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundColor: '#030848' }}
      />
      <div className="absolute inset-0 bg-[#030848]/0" />
    </div>
  );
}