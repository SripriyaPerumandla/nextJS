import custom from '../custom.module.css';
export default function User() {
    return (
      <main> 
        <h1 style={{backgroundColor:"aquamarine"}}>I am in User page</h1>
        <h2 className={custom.main}>H2 tag on User page</h2>
      </main>
    );
  }
  