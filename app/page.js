import Card from "@components/Card";
import Navigation from "@components/Navigation";

export default function Index() {
  return (
    <div className="flex gap-6">
      <div className="w-1/3">
        <Navigation />
      </div>
      <div className="grow">
        <Card>Form</Card>
        <Card>post</Card>
      </div>
    </div>
  );
}
