import { useQuery, gql } from '@apollo/client';
import "./App.css"

const GET_SUBJECTS = gql`
  query GetSubjects{
    messages{
          items{
                 subject
                 id
                 body
                }       
              
              }
  }
`
;





export default function App() {
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h2 class="App-header">🦒My first Apollo app 🚀</h2>
      <div class="card">
      
        {
        data.messages.items.map(eachMessage =>(
        <div className="semi-card">
        <p>id:{eachMessage.id}</p>
        <h3 class="App-link">subject:{eachMessage.subject}</h3>
        <h4>body:{eachMessage.body}</h4>
        </div>))}
        </div>
    </div>
  );
}
