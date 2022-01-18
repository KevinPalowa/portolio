import Link from "next/link";
import Card from "./Card"
export default function Cards({ children, title }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card title="Satu">test</Card>
      <Card title="Dua">test</Card>
      <Card title="Tiga">test</Card>
      <Card title="Empat">test</Card>
    </div>
  );
}
