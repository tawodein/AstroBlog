import { createSignal, createResource, Suspense } from "solid-js";

async function postFormData(formData: FormData) {
  const response = await fetch("/api/profile", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
}

export default function Form() {
  const [formData, setFormData] = createSignal<FormData>();
  const [response] = createResource(formData, postFormData);

  function submit(e: SubmitEvent) {
    e.preventDefault();
    setFormData(new FormData(e.target as HTMLFormElement));
  }

  return (
    <form class="register-buttons" onSubmit={submit}>

      <h1>Add a new blog post</h1>

      <label>
      <h2>Pen Name</h2>
        <input id="name" name="name" required />
      </label>

      <label>
        <h2>Blog Title</h2>
        <input type="text" id="blogtitle" name="blogtitle" required />
      </label>


      <label>
      <h2>Blog Post</h2>
        <textarea id="blogpost" name="blogpost" required />
      </label>





      <button>Submit Post</button>
      <Suspense>{response() && <p>{response().message}</p>}</Suspense>
    </form>
  );
}