import Login from "../../components/common/form/Login";
import img from "../../image";

function StudentLogin() {
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={img.learningPortal} alt="" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in
          </h2>
        </div>
        <Login />
      </div>
    </section>
  );
}

export default StudentLogin;
