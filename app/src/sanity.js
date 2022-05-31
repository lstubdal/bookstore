import sanityClient from '@sanity/client';
	
export default sanityClient({ // create new sanityClient
    projectId: 'cuc1osaz', // unique project id
    dataset: 'production',
    apiVersion: '2022-04-02', // date of sClient created
    useCdn: 'true', // false local / true netlify
    withCredentials: true // for sanity muations
})
