An exception is caught if there are two fields with same name under same cycle and ComplexGroupId

If there are two methods having fields with same name it will cause an issue while calculating the inequality value

There is no condition for the inEqualityId to be 2

7799449596 - Vikram

select fs.field_statistic_id, f.field_id, f.name as FieldName,m.name as MethodNAme,t.name as TestName, t.test_id, m.method_id, fs.mean,fs.standard_deviation,fs.astm_r,f.complex_group_id from fieldstatistics fs
join fields f on fs.field_id=f.field_id 
join methods m on fs.method_id= m.method_id
join tests t on fs.test_id = t.test_id
where fs.cycle_statistic_id=63 and f.complex_group_id = 5;

fn dev

Set-Location 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Client'
Get-ItemProperty -Path . | Select-Object Version

Single123$