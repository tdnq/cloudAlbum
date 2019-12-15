export default function isShowSign(){
    let pathname=window.location.pathname;
    if(pathname==="/login"||pathname==="/logup"){
        return true
    }else{
        return false;
    }
}