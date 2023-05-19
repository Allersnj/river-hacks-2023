function Post(props) {
  return (
    <>
      <div className="entries">
        <div className="responses">
          {props.entryData.date}

        <h3>{props.entryData.journal}</h3>
        {props.entryData.moods.join(', ')}
        <br />
        </div>
        <button onClick={() => props.deleteHandler(props.entryData.key)}>Delete</button>
      </div>
    </>
  )
}

export default Post
