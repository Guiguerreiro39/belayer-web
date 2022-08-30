import withAuth from "@/HOCs/auth";

function New() {
  return (
    <h1>Hello</h1>
  );
}

export default withAuth(New);
