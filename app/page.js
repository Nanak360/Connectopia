import Card from "@components/Card";

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="w-1/3">
        <div className="">
          <Card>test</Card>
        </div>
      </div>
      <div className="grow">
        <Card>Form</Card>
        <Card>post</Card>
      </div>
    </div>
  );
}
