#include <bits/stdc++.h>
using namespace std;
int main() {
	set<pair<string, int>> _set; // pair: �� ���� ���� ���� �� �ִ� ���� first,second�� 
	// �� ���ڿ� ������ �����ϴ�. 
	_set.insert({"test", 1});
	_set.insert({"test", 1});
	_set.insert({"test", 1});
	_set.insert({"test", 1});
	cout << _set.size() << "\n";
	return 0;
}
