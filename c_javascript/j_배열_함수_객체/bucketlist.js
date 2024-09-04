//bucketlist.js

//! 버킷리스트 만들기

let buckets = [];  //% 리스트 목록을 저장할 배열 초기화

function addBucket(content) {
  const newBucket = {
    id:buckets.length + 1,
    content:content,
    completed:false
  }
  buckets.push(newBucket);
  displayBuckets();
};

function toggleBucket(id) {
  buckets = buckets.map((bucket) => {
    if(bucket.id === id) {
      return{...bucket,completed: !bucket.completed};
    }
    return bucket;
  });
  displayBuckets();
}

function deleteBucket(id) {
  buckets = buckets.filter(bucket =>bucket.id !== id)
  displayBuckets();
}

function displayBuckets() {
  console.log('버킷리스트 목록');
  buckets.forEach(bucket => {
    console.log(`${bucket.id})${bucket.content} - ${bucket.completed ? '달성' : '미달성'}`);
  });
};

addBucket('혼자 해외여행가기');
addBucket('여행가기')
addBucket('여행가기')
addBucket('여행가기')
addBucket('여행가기')
addBucket('여행가기')

toggleBucket(2);
toggleBucket(5)
toggleBucket(3)
toggleBucket(1)
toggleBucket(4)





