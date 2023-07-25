function Actions({image,name,message}) {
    return (
      <div>
			<img src={image} alt="action" />
			<h2 className="sectionH1"> {name}</h2>
			<p className="sectionP">
				{message}
			</p>
		</div>
  );
}

export default Actions;