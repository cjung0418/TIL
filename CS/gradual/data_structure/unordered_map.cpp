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
	// map�� find �޼���� ã�� ���ϸ� end() ���ͷ����͸� ��ȯ�Ѵ�.
	auto search = umap.find("test1");
	if (search != umap.end()) {
		cout << "found :" << search -> first << " " << (*search).second << "\n";
	} else {
		cout << "not found.." << "\n";
	}
	// ������ ���� ++�� ���� test1�̶�� Ű�� ���ε� int ���� �����Ѵ�.
	umap["test1"]++;
	cout << umap["test1"] << "\n";
	
	cout << umap.size() << "\n";
	umap.erase("test1");
	cout << umap.size() << "\n";
	
	return 0;
}
