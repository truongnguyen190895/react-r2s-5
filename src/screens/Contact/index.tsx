import { Form, useParams, useNavigate } from "react-router-dom";

const contacts = [
  {
    id: "1",
    first: "Truong",
    last: "Nguyen",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  },
  {
    id: "2",
    first: "Binh",
    last: "Nguyen",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  },
  {
    id: "3",
    first: "Anh",
    last: "Nguyen",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  },
];

export default function Contact() {
  const params = useParams();
  const navigate = useNavigate();
  const { contactId } = params;

  const contact = contacts.find((contact) => contact.id === contactId);
  const onHomepage = () => {
    navigate("/")
  }

  if (!contact) {
    return <h1>No contact found</h1>;
  }

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar} alt="avatar" />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>
        <h3>Contact number: {contactId}</h3>
        {contact.twitter && (
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <button onClick={onHomepage}>Homepage</button>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              // eslint-disable-next-line no-restricted-globals
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }: any) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
