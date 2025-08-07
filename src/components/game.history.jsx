export default function GameHistoryCard({ Id, Winner }) {
  return (
    <>
      <div key={Id} className="bg-gray-200 drop-shadow-xl h-16 w-52 rounded-md flex items-center justify-center">
        <span className="font-bold">Game Winner: {Winner}</span>
      </div>
    </>
  );
}
