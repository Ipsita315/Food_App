const ShimmerUI = () => {
    let shimmerArr = [];
    for(let i=1;i<=12;i++){
        shimmerArr.push(
            <div className="shimmer-col" key={i}>
                <div className="shimmer-card"></div>
            </div>
        )
    }
    return (
        <div className="shimmer-container">
            {shimmerArr}
            
        </div>
    )
};

export default ShimmerUI;