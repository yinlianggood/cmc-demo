import React from "react";

const styles = {
    newsWrap: 'w-full py-[5px] px-[15px] max-w-[1400px] mx-auto',
    h1: 'text-black text-[24px] font-bold',
}

const CmcNews = () => {
    return (
        <div className="w-full">
            <div className={styles.newsWrap}>
                <p className={styles.h1}>市值前100 加密货币</p>
            </div>
        </div>
    )
} 

export default CmcNews