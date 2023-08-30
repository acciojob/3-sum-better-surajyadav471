function threeSum(arr, target) {
// write your code here
	 arr.sort((a,b)=>a-b)

        let len = arr.length
        let closestSum = 10000000;
        for(let i=0;i<=len-3;i++){
            let left = i+1;
            let right = len-1;

            while(left<right){
                let currSum = arr[i]+arr[left]+arr[right]

                if(Math.abs(currSum-target)<Math.abs(closestSum-target))
                    closestSum = currSum

                if(currSum>target)
                    right--
                else
                    left++
            }
        }
        return closestSum;
}

module.exports = threeSum;
