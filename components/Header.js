import React from "react";
import Image from "next/image";

const styles = {
    headerWrap: 'w-full bg-white border-b-2 border-b-gray-100',
    header: 'bg-white w-full text-black flex gap-[30px] py-[5px] px-[15px] max-w-[1400px] mx-auto',
    nav: 'flex flex-row gap-x-[35px] text-black font-bold text-[14px]',
    navItem: 'hover:text-[#3861fb] cursor-pointer flex flex-col justify-center',
    connectWallet: 'h-[36px] bg-[#3861fb] hover:bg-[#2a4fd3] text-white px-[14px] rounded-full flex items-center cursor-pointer',
}

const Header = () => {
    return (
        <div className={styles.headerWrap}>
            <div className={styles.header}>
            <Image src='/images/cmc-logo.png' width={168} height={54}></Image>
            <div className={styles.nav}>
                <div className={styles.navItem}>
                    <span>加密货币</span>
                </div>
                <div className={styles.navItem}>
                    <span>交易所</span>
                </div>
                <div className={styles.navItem}>
                    <span>NFT</span>
                </div>
                <div className={styles.navItem}>
                    <span>投资组合</span>
                </div>
                <div className={styles.navItem}>
                    <span>自选列表</span>
                </div>
            </div>
            <div className="ml-auto flex flex-row items-center">
                <div className={styles.connectWallet}>Connect Wallet</div>
            </div>
            
        </div>
        </div>
    )
}

export default Header