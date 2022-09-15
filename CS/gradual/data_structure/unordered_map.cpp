#include <bits/stdc++.h> 
using namespace std;
int v[10];
int main() {
	unordered_map<string, int> umap;
	umap.insert({"test",1});
	umap["test1"] = 4;
	
	for (auto element : umap) {
		cout << element.first << " :: " << element.second << "\n";
	}
	// map의 find 메서드는 찾지 못하면 end() 이터레디터를 반환한다.
	auto search = umap.find("test1");
	if (search != umap.end()) {
		cout << "found :" << search -> first << " " << (*search).second << "\n";
	} else {
		cout << "not found.." << "\n";
	}
	// 다음과 같이 ++를 통해 test1이라는 키에 매핑된 int 값을 증가한다.
	umap["test1"]++;
	cout << umap["test1"] << "\n";
	
	cout << umap.size() << "\n";
	umap.erase("test1");
	cout << umap.size() << "\n";
	
	return 0;
}
