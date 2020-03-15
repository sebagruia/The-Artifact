// import avatar_icon from '../public/avatar_icon';

const PreviewArticle = (props)=>{
    return(
        <div className="preview-container">
            <div className="img-container">
                <img src="#"/>
            </div>
            <div className="avatar-container">
                <img src="/images/avatar_icon.png"/>
            </div>
            
            <p>date</p>
    <h1>{props.articles[0].title}</h1>
            <a href="#">Article Link</a>
            <p>Content</p>

        <style jsx>{`
            .avatar-container{
                width:30px;
                height:30px;
            }
        `}</style>
        </div>
    );
}

export default PreviewArticle;