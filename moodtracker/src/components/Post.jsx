
function Post(props) {
  return (
    <>
      <div>
        <h3>{props.entryData.journal}</h3>
        {props.entryData.moods}
        <br />
        {props.entryData.key.toString()}
        <button onClick={() => props.deleteHandler(props.entryData.key)}>Delete</button>
      </div>
    </>
  )
}

export default Post
