/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
            source:'/user',
            destination:'/',
            permanent:false
            }
        ]
    }
};

export default nextConfig;
