import ResponseBank from "./PremadeResponseBank";

export default function Classifier(s:string){
    const input: string = s.toLowerCase().trim();
    
    const removePunctuation = input.replace(/[.,;:!?]/g, "");
    const inputWords = removePunctuation.split(/\s+/);

    let match = null;
    let currentMax = 0;

    //return response based on whichkeyword bank gets the most keyword hits
    for(const response of ResponseBank){
        let score = 0;

        for(const keyword of response.keyword_triggers){
            const keywordfix = keyword.toLowerCase();

            if(keywordfix.includes(" ") && input.includes(keywordfix)){
                score += 5;
            }
            else if(inputWords.includes(keywordfix)){
                score += 1;
            }
        }

        if(score > currentMax ){
            currentMax = score;
            match = response;
        }

    }

    if(match === null || currentMax === 0){
        return{
            route:"llm",
            response: null,
            user_input: input
        }
    }

    return{
        route: "basic",
        response: match,
        user_input: input
    }

}
