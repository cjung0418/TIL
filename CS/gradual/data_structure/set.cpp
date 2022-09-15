#include <bits/stdc++.h>
using namespace std;
int main() {
	set<pair<string, int>> _set; // pair: 두 가지 형을 담을 수 있는 구조 first,second로 
	// 그 인자에 접근이 가능하다. 
	_set.insert({"test", 1});
	_set.insert({"test", 1});
	_set.insert({"test", 1});
	_set.insert({"test", 1});
	cout << _set.size() << "\n";
	return 0;
}
