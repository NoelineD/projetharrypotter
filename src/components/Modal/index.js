import "./index.css";

const Modale = (props) => {
  return (
   <div
      onClick={() => {
        props.setShow(false);
      }}
      className="modale"
    > 
      <img src={props.character.image} />
      <div class="characterinfos"><div>Name : {props.character.name}</div>
      <div>Date of Birth : {props.character.dateOfBirth}</div>
      <div>House :{props.character.house}</div>
      <div>Ancestry :{props.character.ancestry}</div>
      <div>Patronus :{props.character.patronus}</div>
      <div>Actor/Actress :{props.character.actor}</div>
      </div>
      
    </div>
  );
};

export default Modale;
