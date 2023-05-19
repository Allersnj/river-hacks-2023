
function Post(props) {
  return (
    <>
      <div>
        <h3>{props.entryData.journal}</h3>
        {props.entryData.moods.join(', ')}
        <br />
        {props.entryData.key.toString()}
        <br />
        <button onClick={() => props.deleteHandler(props.entryData.key)}>Delete</button>
      </div>
    </>
  )
}

export default Post
